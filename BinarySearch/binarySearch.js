//二分查找
function binarySearch(a,v) {
	var low = 0;
	var high = a.length -1;
	var mid; 
	while (low <= high) {
		mid = low + ((high-low) >> 1);
		if(a[mid] < v) {
			low = mid +1 ;
		}else if(a[mid] > v) {
			high = mid -1;
		}else {
			return mid;
		}
	}
	return -1;
}

var test_array = [];
for(var i = 1; i < 1000; i++){
	test_array[i] = i;
}
 
 console.log("查询12的位置"+binarySearch(test_array, 12));
 console.log("查询112的位置"+ binarySearch(test_array, 112));
 console.log("查询444的位置"+ binarySearch(test_array, 444));
 console.log("查询500的位置"+ binarySearch(test_array, 500));
 console.log("查询600的位置"+ binarySearch(test_array, 600));
 console.log("查询600的位置"+ binarySearch(test_array, 1100));
