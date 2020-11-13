import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview';

import { selectShopCollections } from '../../redux/shop/shop.selectors';
import './collections-overview.scss';


const CollectionsOverview = ({ collections }) => {
    // const [collections, setCollections] = useState(SHOP_DATA);

    return (
        <div className="collections-overview">
            {/* {
                collections.map(collection => 
                    <CollectionPreview 
                        key={collection.id}
                        title={collection.title}
                        items={collection.items}
                    />
                )
            } */}
            {
                collections.map(({id, ...otherCollectionItems}) =>
                    <CollectionPreview 
                        key={id}
                        {...otherCollectionItems}
                    />
                )
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});


export default connect(mapStateToProps)(CollectionsOverview);