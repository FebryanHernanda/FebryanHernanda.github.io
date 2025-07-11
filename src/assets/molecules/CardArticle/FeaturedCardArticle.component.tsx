import { Title } from "@/assets/atoms";

const FeaturedCardArticle = () => {
  return (
    <div className="flex gap-5 h-[300px]">
      <img
        src="https://i.pinimg.com/280x280_RS/eb/5b/31/eb5b318df607c096e8e0ea42afe23f45.jpg"
        alt="background"
        className="object-cover h-[7.5rem] w-36 rounded-xl"
      />
      <div className="w-fit">
        <Title
          Label="The Best PC for You: A Comprehensive Review"
          Type="semiBold"
          className="text-2xl"
        />
        <Title
          Label="A review of the best PC for gaming, programming, and more"
          Type="Regular"
          className="text-md"
        />
      </div>
    </div>
  );
};

export default FeaturedCardArticle;
