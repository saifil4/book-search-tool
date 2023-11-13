import Card from '@/layouts/Card';
import Menu from '@/layouts/Menu';
import SubMenu from '@/layouts/SubMenu';

// error handling
// sort
// edge cases in url
// test cases

const getData = async (searchValue, page) => {
  try {
    const fields = `title,author_name,first_publish_year,cover_i`
    const res = await fetch(`http://openlibrary.org/search.json?q=${searchValue}&fields=${fields}&page=${page}`);
    const data = await res.json();
    return data
  } catch (e) {
    console.error(e);
  }
}

export default async function Home({ searchParams }) {

  const { search = null, page = 1, sort = "" } = searchParams;
  const data = search ? await getData(search, page) : {}

  const bookList = data?.docs || [];
  const totalRecords = data?.numFound || 0;
  const startRecord = data?.start || 0;
  const currentPage = Math.ceil(startRecord / 100) + 1;
  const totalPages = Math.ceil(totalRecords / 100);

  return (
    <>
      <nav className='nav'>
        <Menu search={search} />
        <SubMenu totalPages={totalPages} currentPage={currentPage} />
      </nav>
      <main className="main">
        <ul className='card-list'>
          {bookList?.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </ul>
      </main>
    </>
  )
}