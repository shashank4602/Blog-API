#include<bits/stdc++.h>
using namespace std;
int parent[10001];
int find(int a)
{
    if(parent[a]==-1) return a;
    return parent[a]=find(parent[a]);
}
void merge(int a,int b) { parent[a]=b;}
int main()
{
    int n,m;
    cin>>n>>m;
    for(int i=1;i<=n;i++) { parent[i]=-1;}
    vector<pair<int,pair<int,int>>> v(m);
    for(int i=0;i<m;i++)
    {
        cin>>a>>b>>w;
        v[i].first=w;
        v[i].second.first=a;
        v[i].second.second=b;
    }
    sort(v.begin(),v.end());
    int sum=0; 
    for(int i=0;i<m;i++)
    {
        v[i].second.first=find(v[i].second.first);
        v[i].second.second=find(v[i].second.second);
        if(v[i].second.second!=v[i].second.first)
        {
            sum = sum + v[i].first;
            merge(v[i].second.second,v[i].second.first);
        }
    }
    cout<<sum<<'\n';
    return 0;
}