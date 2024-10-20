// ====== USER PARAMS
declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
};

declare type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

// ====== IMAGE PARAMS
declare type ImageConfig = {
  format?: string;
  quality?: number;
  crop?: string;
  gravity?: string;
  [key: string]: unknown; // If there are dynamic keys, allow extra properties as well.
};

declare type Image = {
  title: string;
  publicId: string;
  transformationType: string;
  width: number;
  height: number;
  config: ImageConfig;
  secureURL: string;
  transformationURL: string;
  aspectRatio?: string;
  prompt?: string;
  color?: string;
};

declare type AddImageParams = {
  image: Image;
  userId: string;
  path: string;
};

declare type UpdateImageParams = {
  image: Image & { _id: string };
  userId: string;
  path: string;
};

// ====== TRANSACTION PARAMS
declare type CheckoutTransactionParams = {
  plan: string;
  credits: number;
  amount: number;
  buyerId: string;
};

declare type CreateTransactionParams = {
  stripeId: string;
  amount: number;
  credits: number;
  plan: string;
  buyerId: string;
  createdAt: Date;
};

// ====== URL QUERY PARAMS
declare type FormUrlQueryParams = {
  searchParams: string;
  key: string;
  value: string | number | null;
};

declare type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

declare type RemoveUrlQueryParams = {
  searchParams: string;
  keysToRemove: string[];
};

declare type SearchParamProps = {
  params: { id: string; type: TransformationTypeKey };
  searchParams: { [key: string]: string | string[] | undefined };
};

// ====== TRANSFORMATIONS
declare type Transformations = {
  restore?: boolean;
  fillBackground?: boolean;
  remove?: {
    prompt: string;
    removeShadow?: boolean;
    multiple?: boolean;
  };
  recolor?: {
    prompt?: string;
    to: string;
    multiple?: boolean;
  };
  removeBackground?: boolean;
};

declare type TransformationFormProps = {
  action: "Add" | "Update";
  userId: string;
  type: TransformationTypeKey;
  creditBalance: number;
  data?: Image | null;
  config?: Transformations | null;
};

declare type TransformedImageProps = {
  image: Image;
  type: string;
  title: string;
  transformationConfig: Transformations | null;
  isTransforming: boolean;
  hasDownload?: boolean;
  setIsTransforming?: React.Dispatch<React.SetStateAction<boolean>>;
};

// TransformationTypeKey definition remains unchanged
declare type TransformationTypeKey =
  | "restore"
  | "fill"
  | "remove"
  | "recolor"
  | "removeBackground";
