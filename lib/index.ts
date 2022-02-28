// getStaticPaths
import getStaticPathsPageJournalCategory from '@/lib/getStaticPaths/getStaticPathsPageJournalCategory'
import getStaticPathsPageJournalCategoryTag from '@/lib/getStaticPaths/getStaticPathsPageJournalCategoryTag'
import getStaticPathsPageJournalCategoryTagArticle from '@/lib/getStaticPaths/getStaticPathsPageJournalCategoryTagArticle'

// getStaticProps
import getStaticPropsDefault from '@/lib/getStaticProps/getStaticPropsDefault'
import getStaticPropsTeachers from '@/lib/getStaticProps/getStaticPropsTeachers'
import getStaticPropsPageJournalArticles from '@/lib/getStaticProps/getStaticPropsPageJournalArticles'
import getStaticPropsPageJournalArticle from '@/lib/getStaticProps/getStaticPropsPageJournalArticle'

// handlers
import handleGetStaticPaths from '@/lib/handlers/handleGetStaticPaths'
import handleGetStaticProps from '@/lib/handlers/handleGetStaticProps'

export {
  // getStaticPaths
  getStaticPathsPageJournalCategory,
  getStaticPathsPageJournalCategoryTag,
  getStaticPathsPageJournalCategoryTagArticle,
  // getStaticProps
  getStaticPropsDefault,
  getStaticPropsTeachers,
  getStaticPropsPageJournalArticles,
  getStaticPropsPageJournalArticle,
  // handlers
  handleGetStaticPaths,
  handleGetStaticProps
}
