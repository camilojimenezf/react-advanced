import { Props as ButtonsCardProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ImageCardProps } from "../components/ProductImage";
import { Props as TitleCardProps } from "../components/ProductTitle";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    product: Product;
    counter: number;
    maxCount?: number;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: ({ title, className, style } : TitleCardProps) => JSX.Element;
    Image: ({ img, className, style } : ImageCardProps) => JSX.Element;
    Buttons: ({ className, style } : ButtonsCardProps) => JSX.Element;
}

export interface onChangeProductArgs {
    product: Product;
    count: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;
}
