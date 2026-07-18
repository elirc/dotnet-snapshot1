interface Props {
  title?: string;
  message: string;
}

export function ErrorNotice({ title = 'There is a problem', message }: Props) {
  return (
    <div className="error-notice" role="alert">
      <strong>{title}</strong>
      <p>{message}</p>
    </div>
  );
}
