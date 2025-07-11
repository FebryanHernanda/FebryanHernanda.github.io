import { Spinner } from "@/assets/atoms";
// import { FeaturedCardArticle, MainCardArticle } from "@/assets/molecules";

const ArticlesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-gray-800">
      <Spinner className="w-20 mb-10 " />
      <h1 className="mb-2 text-2xl font-semibold">Page is Under Development</h1>
      <p className="max-w-md text-sm text-center text-muted-foreground">
        We are preparing the best features for you. Please come back later.
      </p>
    </div>

    /*  <div className="flex flex-col min-h-screen p-5 lg:p-10 ">
      <div className="flex flex-row flex-wrap justify-center w-full gap-6 lg:flex-nowrap ">
        <MainCardArticle />
        <div className="flex flex-col hidden w-full gap-5 lg:w-auto lg:text-none xl:block">
          <Title
            Label="Other Featured Posts"
            Type="Bold"
            className="text-3xl text-center lg:text-left"
          />
          <div className="flex flex-col gap-5 mt-5 h-[540px] ">
            <FeaturedCardArticle />
            <FeaturedCardArticle />
            <FeaturedCardArticle />
            <FeaturedCardArticle />
          </div>
        </div>
      </div> */
  );
};

export default ArticlesPage;
