;(function(){
    var $spic_pic=$('.shuju img');
    var $piclist_pic=$('.piclist li img');
    var $pic_sid=$('.particulars_info_left .spic'); 
    $id=location.search.split("?")[1].split("=")[1];
     $.ajax({
        url: '../../php/details.php',
        data:{
            sid:$id
        },
        dataType:'json'
    }).done(function(detailsdata) {
        /*$.each(detailsdata,function(index,value){
           $piclist_pic.eq(index).attr({src:value.url.split(',')[index]}); 
        })*/   
        var $picurl=detailsdata;
        for(var $i=0;$i<7;$i++){
            $piclist_pic.eq($i).attr({src:$picurl.url.split(',')[$i]});
        }   
        $spic_pic
        for(var $i=0;$i<2;$i++){
            $spic_pic.eq($i).attr({src:$picurl.url.split(',')[$i]});
            $pic_sid.eq($i).attr({sid:$picurl.sid})
        } 
    })


    // console.log($id);

})();