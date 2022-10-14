#include <stdio.h>
#include <stdlib.h>
#include <math.h>

struct me {
    int value;
    int index;
};

int cmpfunc (const void * a, const void * b) {
    struct me *e1 = (struct me *)a;
    struct me *e2 = (struct me *)b;
   return ( e1->value - e2->value );
}


int main(void) {
	// your code goes here
	int t;
	scanf("%d\n", &t);
	
	int n, k, j;
	struct me arr[100001];
	
	for(int i = 0; i < t; i++) {
	    scanf("%d %d\n", &n, &k);
	    for(j = 0; j < n; j++) {
	        scanf("%d", &arr[j].value);
	        arr[j].index = j;
	    }
	    qsort(arr, n, sizeof(struct me), cmpfunc);
	    for(j = 0; j < n; j++) {
	        int org = arr[j].index;
	        if(abs(org - j) % k)
	            break;
	    }
	    if (j < n) printf("no\n");
	    else printf("yes\n");
	}
	return 0;
}
