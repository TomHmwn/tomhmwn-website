import Head from "next/head";

import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import LatestCodeRepo from "../components/LatestCodeRepo";
import FavouriteProjects from "../components/FavouriteProjects";
import getLatestRepos from "../lib/getLatestRepos";
import userData from "../constants/data";

export const getServerSideProps = async () => {

  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};

export default function Home({repositories}) {
  return (
    <ContainerBlock
      title="Thomas Himawan – Software Engineer"
      description="I am a recent graduate software engineer and is passionate about tech."
    >
      <Hero />
      <FavouriteProjects />
      <LatestCodeRepo repositories={repositories}/>
    </ContainerBlock>
  );
}
