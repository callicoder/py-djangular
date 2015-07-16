from django.conf.urls import patterns, include, url

from py_djangular.views import IndexView
from authentication.views import AccountViewSet, LoginView, LogoutView
from rest_framework_nested import routers

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)

urlpatterns = patterns(
    '',
	# URLs
	url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
	url(r'^api/v1/auth/logout/$', LogoutView.as_view(), name='logout'),
	url('^.*$', IndexView.as_view(), name='index'),
)
