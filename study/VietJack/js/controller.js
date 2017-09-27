
            ungdungjs.controller("excontroller", function($scope) {
                $scope.xinchao = {};
                $scope.xinchao.tieude = "Angular";
            });
            
            ungdungjs.controller('svcontroller', function($scope){
                $scope.sinhvien2 = {
                    ho2: "Nguyen The",
                    ten2: "Tuan",
                    hoten2: function(){
                        var doituongsv;
                        doituongsv = $scope.sinhvien2;
                        return doituongsv.ho2 + " " + doituongsv.ten2;
                    }
                };
            });

            ungdungjs.controller('nhapcontroller', function($scope){
                $scope.sinhvien3 = {
                    ho3: "Nguyen The ",
                    ten3: "Tuan",
                    hocphi3: 200,
                    tenMonHoc3: [
                        {ten3: 'Vat Ly', diemthi3: 7.5},
                        {ten3: 'Toan', diemthi3: 9.0},
                        {ten3: 'Hoa Hoc', diemthi3: 8.5}
                    ],
                    hoten3: function(){
                        var doituongsv2;
                        doituongsv2 = $scope.sinhvien3;
                        return doituongsv2.ho3 + doituongsv2.ten3;
                    }
                };
             });

             ungdungjs.controller('taobang', function($scope){
                 $scope.sinhvien4 = {
                     ho4: "Nguyen The ",
                     ten4: "Tuan",
                     hocphi4: 500,
                    tenMonHoc4: [
                        {ten4: 'Toan', diemthi4: 8.0},
                        {ten4: 'Ly', diemthi4: 8.0},
                        {ten4: 'Anh', diemthi4: 8.0},
                        {ten4: 'Hoa', diemthi4: 8.0},
                        {ten4: 'Van', diemthi4: 8.0}
                    ],
                    hoten4: function(){
                        var doituongsv4;
                        doituongsv4 = $scope.sinhvien4;
                        return doituongsv4.ho4 + doituongsv4.ten4;
                    }
                 };
             });