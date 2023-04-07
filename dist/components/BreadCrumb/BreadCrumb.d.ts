/// <reference types="react" />
interface CreadCrumbItemProp {
    url?: string;
    onClick?: () => void;
    label: string;
}
export interface Props {
    pathArr: CreadCrumbItemProp[];
}
declare const BreadCrumb: ({ pathArr }: Props) => JSX.Element;
export default BreadCrumb;
