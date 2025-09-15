export const structure = (S) =>
  S.list()
    .title('Guruhita Content Management')
    .items([
      // Hero Banners Section
      S.listItem()
        .title('🏠 Hero Banners')
        .child(
          S.documentTypeList('heroBanner')
            .title('Hero Banners')
            .filter('_type == "heroBanner"')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),

      // Properties Section
      S.listItem()
        .title('🏡 All Properties')
        .child(
          S.documentTypeList('property')
            .title('All Properties')
            .filter('_type == "property"')
            .defaultOrdering([{field: '_createdAt', direction: 'desc'}])
        ),

      // Properties by Category
      S.listItem()
        .title('🏠 For Sale')
        .child(
          S.documentTypeList('property')
            .title('Properties for Sale')
            .filter('_type == "property" && category == "for-sale"')
            .defaultOrdering([{field: 'price', direction: 'desc'}])
        ),

      S.listItem()
        .title('🏠 For Rent')
        .child(
          S.documentTypeList('property')
            .title('Properties for Rent')
            .filter('_type == "property" && category == "for-rent"')
            .defaultOrdering([{field: 'price', direction: 'desc'}])
        ),

      S.listItem()
        .title('🏢 Commercial')
        .child(
          S.documentTypeList('property')
            .title('Commercial Properties')
            .filter('_type == "property" && category == "commercial"')
            .defaultOrdering([{field: 'price', direction: 'desc'}])
        ),

      // Featured Properties
      S.listItem()
        .title('⭐ Featured Properties')
        .child(
          S.documentTypeList('property')
            .title('Featured Properties')
            .filter('_type == "property" && isFeatured == true')
            .defaultOrdering([{field: '_createdAt', direction: 'desc'}])
        ),

      // Divider
      S.divider(),

      // Customer Reviews
      S.listItem()
        .title('⭐ Customer Reviews')
        .child(
          S.documentTypeList('review')
            .title('All Reviews')
            .filter('_type == "review"')
            .defaultOrdering([{field: 'displayOrder', direction: 'asc'}])
        ),

      S.listItem()
        .title('🌟 Featured Reviews')
        .child(
          S.documentTypeList('review')
            .title('Featured Reviews')
            .filter('_type == "review" && isFeatured == true')
            .defaultOrdering([{field: 'displayOrder', direction: 'asc'}])
        ),
    ])
