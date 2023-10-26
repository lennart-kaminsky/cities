import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import { Title1, Title2 } from "@/components/Headlines";
import { StyledNavLink } from "@/components/Link";
import { ListItem } from "@/components/List";
import { FlexColumnContainer } from "@/utils";

export default function CityPage() {
  const router = useRouter();
  const { slug } = router.query;

  console.log("router.query: ", router.query);
  console.log("slug: ", slug);

  const city = cities.find((city) => city.slug === slug);
  console.log("City: ", city);
  return (
    <FlexColumnContainer>
      <Title1>{city.name}</Title1>
      <p>{city.description}</p>
      <Title2>More information</Title2>
      <ul>
        <ListItem>Country: {city.country}</ListItem>
        <ListItem>Population: {city.population}</ListItem>
      </ul>
      <StyledNavLink href="/cities">Back to all cities</StyledNavLink>
    </FlexColumnContainer>
  );
}
