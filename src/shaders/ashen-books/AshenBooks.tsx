import {BookAssetHost,type BookAssetProps} from '../book-asset-host/BookAssetHost';
export type AshenBooksProps=BookAssetProps;
/** Standalone editions extracted from ashen-press. */
export function AshenBooks(props:AshenBooksProps){return <BookAssetHost {...props} kind="ashen" title="Ashen Books"/>;}
