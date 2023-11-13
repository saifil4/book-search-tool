import Card from '@/components/Card';
import Menu from '@/layouts/Menu';
import SubMenu from '@/layouts/SubMenu';

// error handling- > add a error page
// edge cases in url -> testing
// test cases
// WCAG
// Loading state
// mulitple author name

const getData = async (searchValue, page, sort) => {
  try {
    const fields = `title,author_name,first_publish_year,cover_i`;
    const limit = 100;
    const res = await fetch(`http://openlibrary.org/search.json?q=${searchValue}&fields=${fields}&page=${page}&sort=${sort}&limit=${limit}`);
    const data = await res.json();
    return data
  } catch (e) {
    console.error(e);
    throw e;
    // return { error: true }
  }
}

export default async function Home({ searchParams }) {

  const { search = null, page = 1, sort = "title" } = searchParams;
  const data = search ? await getData(search, page, sort) : {}

  const bookList = data?.docs || [];
  const totalRecords = data?.numFound || 0;
  const startRecord = data?.start || 0;
  const currentPage = Math.ceil(startRecord / 100) + 1;
  const totalPages = Math.ceil(totalRecords / 100);

  return (
    <>
      <nav className='nav'>
        <Menu search={search} />
        <SubMenu disabled={bookList.length === 0} totalPages={totalPages} currentPage={currentPage} sort={sort} />
      </nav>
      <main className="main">
        {
          search && bookList.length === 0 && <p className="no-result">No results found for <i>"{search}"</i></p>
        }
        {
          !search && bookList.length === 0 && <p className="no-result">Search to find your next read</p>
        }
        <ul className='card-list'>
          {bookList?.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </ul>
      </main>
    </>
  )
}