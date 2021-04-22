import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

export default function sidebar() {
  return S.list()
    .title('Pizza Co')
    .items([
      // create new sub item
      S.listItem()
        .title(`Home Page`)
        .icon(() => <strong>🔥</strong>)
        .child(S.editor().schemaType('storeSettings').documentId('downtown')),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
