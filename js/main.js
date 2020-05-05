$(document).ready(function(){
    $('.experiance-toggle').click(function(){
        var $this = $(this);
        $('.experiance-hidden').slideToggle('slow');
        if($this.html() === 'Show More'){
            $this.text('Hide');
        } else {
            $this.text('Show More');
        }
    });
    $('.personal-toggle').click(function(){
        var $this = $(this);
        $('.personal-hidden').slideToggle('slow');
        if($this.html() === 'Show More'){
            $this.text('Hide');
        } else {
            $this.text('Show More');
        }
    });
    $('.career-toggle').click(function(){
        var $this = $(this);
        $('.career-hidden').slideToggle('slow');
        if($this.html() === 'Show More'){
            $this.text('Hide');
        } else {
            $this.text('Show More');
        }
    });
    $('.education-toggle').click(function(){
        var $this = $(this);
        $('.education-hidden').slideToggle('slow');
        if($this.html() === 'Show More'){
            $this.text('Hide');
        } else {
            $this.text('Show More');
        }
    });
});