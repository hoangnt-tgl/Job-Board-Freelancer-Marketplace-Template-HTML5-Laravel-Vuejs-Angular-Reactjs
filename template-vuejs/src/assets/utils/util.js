const datatable = (value) => {  // Datatable
    if ($(value).length > 0) {
        $(value).DataTable({
          "bFilter": false,
          "paging": true,
        });
    }
  }
  
  export default { datatable}
  