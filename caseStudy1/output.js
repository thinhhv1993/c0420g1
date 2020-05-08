function output() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let yearold = document.getElementById("yearold").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let customer = document.getElementById("customer").value;
    let sell = document.getElementById("sell").value;
    let number = document.getElementById("number").value;
    let rentdays = document.getElementById("rendays").value;
    let service = document.getElementsByName("service").id;
    let loaiphong = document.getElementsByName("service1").id;
    document.write("Họ và Tên :" + name);
    document.write("<br>");
    document.write("CMND :" + id);
    document.write("<br>");
    document.write("Ngày Tháng Năm Sinh :" + yearold);
    document.write("<br>");
    document.write("Email :" + email);
    document.write("<br>");
    document.write("Địa Chỉ :" + address);
    document.write("<br>");
    document.write("Cutomer :" + customer);
    document.write("<br>");
    document.write("sell :" + sell);
    document.write("<br>");
    document.write("Số lượng đi kèm :" + number);
    document.write("<br>");
    document.write("Rentday :" + rentdays);
    document.write("<br>");
    if (document.getElementsById("villa").checked){
       service = villa;
        document.write("Họ và Tên :" + service);
        document.write("<br>");
    }
}