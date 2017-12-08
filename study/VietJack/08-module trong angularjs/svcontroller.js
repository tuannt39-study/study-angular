myapp.controller('svController', function($scope){
    $scope.sinhvien = {
        ho: 'Nguyễn Thế ',
        ten: 'Tuân',
        hocphi: 500,
        tenMonHoc: [
            {ten: 'Vật lý', diemthi: '8'},
            {ten: 'Văn học', diemthi: '7'},
            {ten: 'Toán', diemthi: '9'}
        ],
        hoten: function(){
            var dtsv;
            dtsv = $scope.sinhvien;
            return dtsv.ho + ' ' + dtsv.ten;
        }
    }
});