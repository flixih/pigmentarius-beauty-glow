import { Toaster as Sonner, toast } from "sonner";
type ToasterProps = React.ComponentProps<typeof Sonner>;
const Toaster = ({ ...props }: ToasterProps) => (
  <Sonner theme="dark" className="toaster group" {...props} />
);
export { Toaster, toast };
