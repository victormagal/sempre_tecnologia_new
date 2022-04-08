export default function Content({ content, date, summary }) {
  return (
    <>
      <h1>{summary}</h1>
      <legend>
        Publicado em: {new Date(date).toLocaleDateString('pt-BR')}
      </legend>
      <div
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
    </>
  );
}
