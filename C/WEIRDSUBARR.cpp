#include <iostream>
using namespace std;

int main() {
	// your code goes here
	int test;
	int A[100000];
    cin>>test;
	while(test--){
	        int n;
	        long long int result = 1;
	        cin>>n;
	        for(int i = 0; i < n; i++) {
	            cin>>A[i];
	        }
	        int strict_increase = 0;
	        int smooth_increase = 0;
	        int decrease = 0;
	        
	        for(int i = 1; i < n; i++) {
	            result++;
	            if (A[i-1] <= A[i]) {
	                result += i - smooth_increase;
	                decrease = i;
	            } else {
	                result += i - decrease;
	                strict_increase = i;
	                smooth_increase = decrease;
	            }
	        }
	        std::cout << result << std::endl;
	}
	return 0;
}
