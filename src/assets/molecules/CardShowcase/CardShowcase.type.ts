export type Props = {
  media: string;
  mediaAlt: string;
  titleContent: string;
  descContent: string;
  linkDemo: string;
  tools: TechLogo[];
};

type TechLogo = {
  src: string;
  description: string;
  label: string;
};
