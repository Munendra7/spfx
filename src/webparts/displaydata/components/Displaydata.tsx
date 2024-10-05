import * as React from 'react';
import { useState, useEffect } from 'react';
import { ListService } from '../services/ListService';
import ListTable from './ListTable';
import { WebPartContext } from '@microsoft/sp-webpart-base';

interface IMySpfxWebPartProps {
  context: WebPartContext;
}

const Displaydata: React.FC<IMySpfxWebPartProps> = ({ context }) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const listService = new ListService(context.spHttpClient, context.pageContext.web.absoluteUrl);
    listService.getListItems('AssignmentList').then((data:any) => {
      setItems(data);
    });
  }, [context]);


  return (
    <div>
      <ListTable items={items} />
    </div>
  );
};

export default Displaydata;