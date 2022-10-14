#include <stdio.h>

int main(void) {
	// your code goes here
	int t;
	scanf("%d\n", &t);
	
	for(int i = 0; i < t; i++) {
	    int n, s, p[100], minD = 101, minF = 101, j;
	    scanf("%d %d\n", &n, &s);
	    for(j = 0; j < n; j++) {
	        scanf("%d", &p[j]);
	    }
	    for(j = 0; j < n; j++) {
	        int flag = 0;
	        scanf("%d", &flag);
	        if (flag == 0 && minD > p[j])
	            minD = p[j];
	       if (flag == 1 && minF > p[j])
	            minF = p[j];
	    }
	    if (s + minD + minF <= 100) printf("yes\n");
	    else printf("no\n");
	}
	return 0;
}