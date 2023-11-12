import styles from './page.module.css';
import Card from '@/components/card';
import SearchSection from '@/layouts/SearchSection';
import Pagination from '@/layouts/Pagination';

const getData = async (searchValue, page) => {
  try {
    const res = await fetch(`http://openlibrary.org/search.json?q=${searchValue}&fields=title,author_name,first_publish_year,cover_i&page=${page}`);
    const data = await res.json();
    return data
  } catch (e) {
    console.error(e);
  }
}

export default async function Home({ searchParams }) {

  const { search, page = 0 } = searchParams;
  const data = search ? await getData(search, page) : [];

  const bookList = data?.docs;
  const totalRecords = data?.numFound || 0;
  const startRecord = data?.start || 0;
  const currentPage = Math.ceil(startRecord / 100) + 1;
  const totalPages = Math.ceil(totalRecords / 100);

  return (
    <main className={styles.main}>
      <SearchSection search={search} />
      <Pagination totalPages={totalPages} currentPage={currentPage}/>
      <ul className='card-list'>
        {bookList?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </ul>
    </main>
  )
}