import { StyledNavLink } from "@/components/Link";
import { FlexColumnContainer } from "@/utils";

export default function HomePage() {
  return (
    <FlexColumnContainer>
      <h1>Cities</h1>
      <StyledNavLink href="/cities">View all cities</StyledNavLink>
    </FlexColumnContainer>
  );
}
