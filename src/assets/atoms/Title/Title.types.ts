export type Props = {
  Label: string;
  Type:
    | "Bold"
    | "semiBold"
    | "Regular"
    | "subHeadline"
    | "headline"
    | "subTitle"
    | "cardTitle"
    | "cardSubTitle";
  className?: string;
};
