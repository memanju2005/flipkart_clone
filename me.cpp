// program to add 3 numbers by c++
// using class and function
#include<iostream>
using namespace std;
class Add
{
public:
    int num1, num2, num3;
    void getData()
    {
        cout << "Enter 3 numbers: ";
        cin >> num1 >> num2 >> num3;
    }
    int add()
    {
        return num1 + num2 + num3;
    }
};
int main()
{
    Add obj;
    obj.getData();
    cout << "\nSum of the three numbers is : " << obj.add();
    return 0;
}
