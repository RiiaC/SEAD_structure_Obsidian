
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

function normalizeToArray(value: unknown): string[] {
  if (!value) return []
  if (Array.isArray(value)) return value.map(String).filter(Boolean)
  const s = String(value)
  return s
    .split(",")
    .map((x) => x.trim())
    .filter((x) => x.length > 0)
}

const ColumnMapping: QuartzComponent = ({ file }: QuartzComponentProps) => {
  const fm = file?.data?.frontmatter ?? {}

  const columnName = fm["column_name"]
  const dataType = fm["data_type"]
  const connectedTables = normalizeToArray(fm["connected_tables"])
  const exampleData = fm["example data"] ?? fm["example_data"]
  const bestMatched = fm["best matched column"] ?? fm["best_matched_column"]

  const hasAny =
    !!columnName ||
    !!dataType ||
    connectedTables.length > 0 ||
    !!exampleData ||
    !!bestMatched

  if (!hasAny) return null

  return (
    <section class="column-mapping">
      <header class="column-mapping__title">Column mapping</header>
      <dl class="column-mapping__list">
        {columnName ? (
          <>
            <dt>Column name</dt>
            <dd>{String(columnName)}</dd>
          </>
        ) : null}

        {dataType ? (
          <>
            <dt>Data type</dt>
            <dd>{String(dataType)}</dd>
          </>
        ) : null}

        {connectedTables.length > 0 ? (
          <>
            <dt>Connected tables</dt>
            <dd>
              <ul class="column-mapping__tags">
                {connectedTables.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </dd>
          </>
        ) : null}

        {exampleData ? (
          <>
            <dt>Example data</dt>
            <dd><code>{String(exampleData)}</code></dd>
          </>
        ) : null}

