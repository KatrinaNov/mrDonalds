import { useState, useEffect } from 'react';

export const useDB = dataBase => {
  const [db, setdb ] = useState(null);

  useEffect(() => {
    const dbRef = dataBase.ref('goods');
    dbRef.on('value', snapshot => {
      setdb(snapshot.val());
    });
  }, [dataBase]);
  return db;
};