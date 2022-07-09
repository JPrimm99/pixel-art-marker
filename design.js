
const $colorPicker = $('#colorPicker');
const $tableElement = $('#pixelCanvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');


$('#sizePicker').submit( event => {
    event.preventDefault();

    let width = $inputWidth.val();
    let height = $inputHeight.val();

    //press sumbit to clear coloring off chart. //
    $tableElement.html(''); //clear

    makeGrid(height, width);
    addCellClickListener();
});

//height and width choosen by guest to create numbers of pixel of choice//
function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        $tableElement.append('<tr></tr>');
    };

    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};

//pixel boxs colors. guests can change colors//
function addCellClickListener() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};
    

   
    