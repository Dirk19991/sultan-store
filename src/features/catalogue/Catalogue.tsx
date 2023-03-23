import Container from '../../components/Container';
import data from '../../data/data.json';
import CatalogueGrid from './grid/CatalogueGrid';
import CatalogueHeader from './header/CatalogueHeader';

function Catalogue() {
  return (
    <Container>
      <CatalogueHeader />
      <CatalogueGrid />
    </Container>
  );
}
export default Catalogue;
