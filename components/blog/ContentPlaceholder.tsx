import NotFoundPage from '@/app/not-found';
import Accent from '@/components/blog/Accent';

export default function ContentPlaceholder() {
  return (
    <div className='flex flex-col justify-center items-center col-start-2'>
      <NotFoundPage isPost />
      <h2 className='mt-8 text-center sm:col-span-2 xl:col-span-3'>
        <Accent>Sorry, not found posts :(</Accent>
      </h2>
    </div>
  );
}
