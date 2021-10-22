import React from 'react';
import {useRouter} from 'next/router';

const NewsDynamic = () => {
  const router = useRouter();
  const newId = router.query.newsId;

  return (
    <div>
      {newId}
    </div>
  );
};

export default NewsDynamic;