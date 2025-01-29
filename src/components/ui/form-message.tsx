export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {"success" in message && (
        <div className="text-primary border-foreground">
          {message.success}
        </div>
      )}
      {"error" in message && (
        <div className="text-destructive border-destructive-foreground">
          {message.error}
        </div>
      )}
      {"message" in message && (
        <div className="text-foreground">{message.message}</div>
      )}
    </div>
  );
}
