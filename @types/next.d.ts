export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type CharacterType = {
  name: string;
  union: string;
  link: string;
  order: string;
  uorder: string;
};

export type DopingType ={
  url: string;
  title: string;
  content: string;

  getin: string;
}

export type UserType = {
  name: string;
  world: string;
  guild: string;
  job: string;
  level: number;
  spec: Object;
  imageUrl: string;

  error?: string;
}