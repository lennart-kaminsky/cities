import { cities } from "@/lib/data";
import { StyledLink, StyledNavLink } from "@/components/Link";
import { ListItem } from "@/components/List";
import { Title1 } from "@/components/Headlines";
import { FlexColumnContainer } from "@/utils";

export default function CitiesOverview() {
  return (
    <FlexColumnContainer>
      <Title1>All Cities</Title1>
      <ul>
        {cities.map((city) => (
          <ListItem key={city.id}>
            <StyledLink href={`/cities/${city.slug}`}>{city.name}</StyledLink>
          </ListItem>
        ))}
      </ul>
      <StyledNavLink href="/">Back to homepage</StyledNavLink>
    </FlexColumnContainer>
  );
}
