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

      // Properties Section - Single entry with filtering inside
      S.listItem()
        .title('🏡 Properties')
        .child(
          S.documentTypeList('property')
            .title('All Properties')
            .filter('_type == "property"')
            .defaultOrdering([{field: '_createdAt', direction: 'desc'}])
        ),

      // Customer Reviews - Single entry with filtering inside
      S.listItem()
        .title('⭐ Reviews')
        .child(
          S.documentTypeList('review')
            .title('All Reviews')
            .filter('_type == "review"')
            .defaultOrdering([{field: 'displayOrder', direction: 'asc'}])
        ),

      // Divider
      S.divider(),

      // Form Submissions
      S.listItem()
        .title('📝 Form Submissions')
        .child(
          S.documentTypeList('formSubmission')
            .title('Contact Form Submissions')
            .filter('_type == "formSubmission"')
            .defaultOrdering([{field: 'submittedAt', direction: 'desc'}])
        ),
    ])
