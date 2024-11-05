import { Button } from "@/components/ui/button";
import { Props } from "./ResumeDownload.types";

const ResumeDownload = (props: Props) => {
  const { variant } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "../FebryanHernanda-Resume.pdf";
    link.setAttribute("download", "Febryan Hernanda CV.pdf");
    link.dispatchEvent(new MouseEvent("click"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit" variant={variant} className="text-md">
        Download CV
      </Button>
    </form>
  );
};

export default ResumeDownload;
