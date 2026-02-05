import { Title } from "@/assets/atoms";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const MainCardArticle = () => {
  return (
    <div className="flex flex-col flex-grow gap-3">
      <img
        src="https://i.ytimg.com/vi/iw5Dd0-gh3Q/maxresdefault.jpg"
        alt="background"
        className="w-full h-[300px] md:h-[600px] object-cover rounded-xl"
      />
      <div className="flex flex-wrap items-center gap-5 lg:flex-row">
        <Avatar className="w-7 h-7">
          <AvatarImage
            src="img/ava.png"
            alt="profile picture"
            className="object-cover"
          />
          <AvatarFallback>Profile Picture</AvatarFallback>
        </Avatar>
        <Title Label="Febryan Hernanda" Type="Bold" className="text-md" />
        <div className="flex flex-row items-center gap-2 mt-[-10px] md:mt-0">
          <span className="text-[20px] hidden md:block">•</span>
          <Title
            Label="02/20/2025"
            Type="cardSubTitle"
            className="text-sm text-gray-500"
          />
          <span className="text-[20px]">•</span>
          <Badge variant="outline">
            <Title Label="Programmer" Type="cardSubTitle" />
          </Badge>
          <Badge variant="outline">
            <Title Label="Technology" Type="cardSubTitle" />
          </Badge>
        </div>
      </div>
      <Title Label="Setup Tour" Type="Bold" className="text-3xl" />
      <Title
        Label="In this article, we will explore how to setup a tour using the React Tour Library. We will go over the basic setup, how to create steps, and how to customize the tour."
        Type="Regular"
        className="text-xl"
      />
    </div>
  );
};

export default MainCardArticle;
