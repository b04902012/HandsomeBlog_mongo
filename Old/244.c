int main(){
    int s[3],n[3];
    int i;
    for(i=0;i<3;i++)
        scanf("%d",&s[i]);
    for(i=0;i<3;i++)
        scanf("%d",&n[i]);
    int num;
    int ans=0;
    while(scanf("%d",&num)!=EOF){
        for(i=0;i<3;i++){
            if(num==s[i]){
                ans+=2000000;
                continue;
            }
        }
        for(i=0;i<3;i++){
            if(num==n[i]){
                ans+=200000;
                continue;
            }
            if(num%10000000==n[i]%10000000){
                ans+=40000;
                continue;
            }
            if(num%1000000==n[i]%1000000){
                ans+=10000;
                continue;
            }
            if(num%100000==n[i]%100000){
                ans+=4000;
                continue;
            }
            if(num%10000==n[i]%10000){
                ans+=1000;
                continue;
            }
            if(num%1000==n[i]%1000){
                ans+=200;
                continue;
            }
        }
    }
    printf("%d\n",ans);
}