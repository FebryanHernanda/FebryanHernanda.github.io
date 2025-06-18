import { Spinner } from "@/assets/atoms";

const ArticlesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-gray-800">
      <Spinner className="w-20 mb-10 " />
      <h1 className="mb-2 text-2xl font-semibold">Page is Under Development</h1>
      <p className="max-w-md text-sm text-center text-muted-foreground">
        We are preparing the best features for you. Please come back later.
      </p>
    </div>
  );
};

export default ArticlesPage;
