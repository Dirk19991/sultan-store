import PageHeader from '../../../components/PageHeader';
import { CareType } from '../../../context/GoodsContextProvider';
import useMediaQuery from '../../../hooks/useMediaQuery';
import {
  ICatalogueHeaderProps,
  ICatalogueParameters,
  Selectors,
} from '../Catalogue';
import {
  Wrapper,
  Breadcrumbs,
  BreadcrumbsMain,
  DashedLine,
  BreadcrumbsCurrent,
  Flex,
  SortingGroup,
  Select,
  Filter,
  FilterElement,
} from './CatalogueHeader.style';

function CatalogueHeader(props: ICatalogueHeaderProps) {
  const { careType, setCareType, setSelectedSort } = props;

  // делает flex-wrap когда компоненент перестает вмещаться
  const tabletMedia = useMediaQuery('(max-width: 1400px)');

  const filterOptions: { name: CareType | ''; text: string; width: string }[] =
    [
      { name: 'body', text: 'Уход <br /> за телом', width: '100px' },
      { name: 'hands', text: ' Уход <br /> за руками', width: '100px' },
      { name: 'feet', text: 'Уход <br /> за ногами', width: '100px' },
      { name: 'face', text: 'Уход <br /> за лицом', width: '100px' },
      { name: 'hair', text: 'Уход <br /> за волосами', width: '120px' },
      { name: 'tan', text: 'Средства <br /> для загара', width: '120px' },
      { name: 'shaving', text: 'Средства <br /> для бритья', width: '120px' },
      { name: 'gift', text: 'Подарочные наборы', width: '120px' },
      { name: 'hygiene', text: 'Гигиеническая продукция', width: '140px' },
      { name: 'mouth', text: 'Гигиена полости рта', width: '120px' },
      { name: 'paper', text: 'Бумажная продукция', width: '120px' },
    ];

  return (
    <Wrapper>
      <Breadcrumbs>
        <BreadcrumbsMain>Главная</BreadcrumbsMain>
        <DashedLine />
        <BreadcrumbsCurrent>Косметика и гигиена</BreadcrumbsCurrent>
      </Breadcrumbs>
      <Flex>
        <PageHeader>Косметика и гигиена</PageHeader>
        <SortingGroup>
          <span>Сортировка:</span>
          <Select
            onChange={(e) => setSelectedSort(e.target.value as Selectors)}
          >
            <option value='priceDown'>Цена &#9662;</option>
            <option value='priceUp'>Цена &#9652;</option>
            <option value='nameDown'>Название &#9662;</option>
            <option value='nameUp'>Название &#9652;</option>
          </Select>
        </SortingGroup>
      </Flex>
      <Filter wrap={tabletMedia ? 1 : 0}>
        {filterOptions.map((option) => (
          <FilterElement
            name={option.name}
            careType={careType}
            onClick={() =>
              setCareType((prev) => (prev === option.name ? '' : option.name))
            }
            dangerouslySetInnerHTML={{ __html: option.text }}
            key={option.name}
            width={option.width}
          ></FilterElement>
        ))}
      </Filter>
    </Wrapper>
  );
}
export default CatalogueHeader;
