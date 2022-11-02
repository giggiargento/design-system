  // // Selects
if ($('select').length > 0) {
  $('select:not(.no-search)').chosen()
  $('select.no-search').chosen({disable_search: true});
}