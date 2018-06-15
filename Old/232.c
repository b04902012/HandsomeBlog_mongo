int m[12]={31,28,31,30,31,30,31,31,30,31};
int dff(int m1,int d1,int m2,int d2){
	int i;
	int rsl=0;
	for(i=m1;i<=m2;i++)
		rsl+=m[i];
	rsl-=d1+(m2-d2);
	return rsl;
}
int run(int y){
	if(y%4!=0||(y%100==0&&y%400!=0))
		return 1;
	return 0;
}
int main(){
	int y,w;
	scanf("%d%d",&y,&w);
	if(run(y)==1)m[1]++;
	int n;
	scanf("%d",&n);
	while(n--){
		int tm,td;
		scanf("%d%d",&tm,&td);
		if(tm>12){
			puts("-1");
			continue;
		}
		if(td>m[tm-1]){
			puts("-2");
			continue;
		}
		int d=dff(0,1,tm-1,td);
		int ans=(w+d)%7;
		printf("%d\n",ans);

	}
}