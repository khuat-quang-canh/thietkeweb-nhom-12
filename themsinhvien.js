var check_khoa=/^[A-Za-z]{4,30}$/
var check_lop = /^[A-Za-z0-9]{4,10}$/
var check_ten = /^[A-za-z0-9]{5,20}$/
var check_msv = /^[0-9]{6}$/
var check_k =/^[0-9]{2}$/
var check_que =/^[A-Za-z]{5,60}$/
var check_sdt =/^[0-9]{10}$/
function showerror(key, mess){
    document.getElementById("error_"+key).innerHTML=mess;
}
function checknull(txt){
    if(txt.value.length==0)
        return true;
    else
        return false;
}

function notCheck(radio){
    var rt=true;
    for(i=0; i<radio.length ; i++ )
        if(radio[i].checked)
            rt=false;
        return rt;
}
function StringMatch(txt, reg){
    return reg.test(txt.value);
}
function validform(f){
    if(checknull(f.khoa)){
        showerror("khoa" , "Khoa không được trống !!");
        f.khoa.focus();
        return;
    }
    if(!StringMatch(f.khoa, check_khoa)){
        showerror("khoa" , "Khóa không hợp lệ !!");
        f.khoa.value="";
        f.khoa.focus();
        return;
    }
    showerror("khoa" , "");
    if(checknull(f.k)){
        showerror("k" , "Khoa không được trống !!");
        f.k.focus();
        return;
    }
    if(!StringMatch(f.k, check_k)){
        showerror("k" , "Khóa không hợp lệ !!");
        f.k.value="";
        f.k.focus();
        return;
    }
    showerror("k" , "");
    
    if(checknull(f.msv)){
        showerror("msv" , "Mã sinh viên không được trống !!");
        f.msv.focus();
        return;
    }
    if(!StringMatch(f.msv, check_msv)){
        showerror("msv" , "Mã sinh viên không hợp lệ!!");
        f.msv.value="";
        f.msv.focus();
        return;
    }
    showerror("msv" , "");
    if(checknull(f.ten)){
        showerror("ten" , "Họ và tên không được để trống!!");
        f.ten.focus();
        return;
    }
    if(!StringMatch(f.ten, check_ten)){
        showerror("ten" , "Khóa không hợp lệ !!");
        f.ten.value="";
        f.ten.focus();
        return;
    }
    showerror("ten" , "");
    if(checknull(f.que)){
        showerror("que" , "Quê quán không được để trống!!");
        f.que.focus();
        return;
    }
    if(!StringMatch(f.que, check_que)){
        showerror("que" , "Khóa không hợp lệ !!");
        f.que.value="";
        f.que.focus();
        return;
    }
    showerror("que" , "");
    if(notCheck(f.gender)){
       showerror("gender" , "Vui lòng chọn giới tính!!");
        return;
    }
    showerror("gender" , "");
    if(checknull(f.sdt)){
       showerror("sdt" , "Số điện thoại không được để trống !!");
        f.sdt.focus();
        return;
    }
    if(!StringMatch(f.sdt, check_sdt)){
       showerror("sdt" , "Số điện thoại không hợp lệ!!");
        f.sdt.value="";
        f.sdt.focus();
        return;
    }
    showerror("sdt" , "");
    alert("Đã lưu sinh viên !!!!");
   
}
	